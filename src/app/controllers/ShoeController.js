import Shoe from '../models/Shoe';

class ShoeController {
  async store(req, res) {
    const { url, name, price } = req.body;

    const shoes = await Shoe.create({
      url,
      name,
      price,
    });

    return res.json(shoes);
  }

  async index(req, res) {
    const shoes = await Shoe.findAll();

    return res.json(shoes);
  }
}

export default new ShoeController;
