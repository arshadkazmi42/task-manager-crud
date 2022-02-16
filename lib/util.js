class Util {

  constructor() {}

  async callAsync(fn, req, res) {

    try {
      return await fn(req, res);
    } catch (err) {
      console.log(err);
      return res.status(500).send({success: false, data: err.message});
    }
  }
  

  validateParams(data, params) {

    for (let parm of params) {
      if (!data[parm]) {
        throw new Error('Required Parameter missing');
      }
    }

    return true;
  }

}


module.exports = Util;
