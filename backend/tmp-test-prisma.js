const { PrismaClient } = require('./src/generated');

async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    console.log('CONNECTED');
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
