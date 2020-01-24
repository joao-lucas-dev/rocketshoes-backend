import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const shoes = await File.create({
      name,
      path
    });

    return res.json(shoes);
  }
}

export default new FileController;
