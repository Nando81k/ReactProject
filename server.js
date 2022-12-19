const { db } = require("./server/models");
const app = require("./server/app");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();
