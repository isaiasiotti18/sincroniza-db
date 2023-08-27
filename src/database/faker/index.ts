import { fakerDE as faker } from '@faker-js/faker';
import { Sequelize } from 'sequelize-typescript';

type Product = {
  codigo: number;
  descricao: string;
  preco: number;
  qtd: number;
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const productArray: Array<Product> = [];

for (let i = 0; i < 950; i++) {
  const product: Product = {
    codigo: getRandomIntInclusive(55, 99999) + 88,
    descricao:
      faker.commerce.product() +
      ' ' +
      faker.commerce.productAdjective() +
      ' ' +
      faker.commerce.productMaterial(),
    preco: Number(faker.commerce.price({ min: 10, max: 9999 })),
    qtd: faker.number.int({ min: 77, max: 9999 }),
  };
  productArray.push(product);
}

console.log(productArray);

async function connectDB() {
  try {
    const connect = new Sequelize({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root_password',
      database: 'dbcliente',
    });

    await connect.authenticate();

    for await (const product of productArray) {
      await connect.query(`
        INSERT INTO produtos (codigo, descricao, preco, estoque)
        VALUES (${product.codigo}, "${product.descricao}", ${product.preco}, ${product.qtd});
      `);
    }

    await connect.close();
  } catch (error) {
    throw new Error(`Error Message: ${error}`);
  }
}
connectDB()
  .then(() => console.log('Banco de dados populado.'))
  .catch((err) => console.log(err));
