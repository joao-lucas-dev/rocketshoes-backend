import Shoe from '../models/Shoe';

class ItemController {
  async index(req, res) {
    const { id } =  req.params;

    const item = await Shoe.findAll({ where: { id } });

    return res.json(item);
  }
}

export default new ItemController;
