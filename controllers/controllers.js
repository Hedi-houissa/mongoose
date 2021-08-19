// const addPerson 

const getPerson = async (req, res) => {
  try {
    const allPerson = await Person.find();
    res.status(200).send({ msg: "all persons ...", allPerson });
  } catch (error) {
    res.status(400).send({ msg: "can not add person ", error });
  }
}

const deletePerson = async (req, res) => {
    console.log(req.params.id)
  try {
    const {_id} = req.params.id;
    const personToFind = Person.findOne({_id})
    console.log(personToFind)
    if(!personToFind){
        return res.status(400).send({msg:"person not exist !!!"})
    }

    await Person.deleteOne({ _id });
    res.status(200).send({ msg: "person deleted succ ..", personToFind });
  } catch (error) {
    res.status(400).send({ msg: "can not delete person with this id ", error });
  }
}


const getOneByIdPerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const persontofind = await Person.findOne({ _id });
    res.status(200).send({ msg: "i find it ...", persontofind });
  } catch (error) {
    res.status(400).send({ msg: "can not find person with this id ", error });
  }
}

const getOnePerson = async (req, res) => {
    try {
      const { _id } = req.params;
      const persontofind = await Person.findOne({ _id });
      res.status(200).send({ msg: "i find it ...", persontofind });
    } catch (error) {
      res.status(400).send({ msg: "can not find person with this id ", error });
    }
  }

const updatePerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const newPerson = req.body;
    const result = await Person.updateOne({ _id }, { $set: { ...newPerson } });
    if (result.nModified === 0) {
      return res.status(400).send({ msg: "alredy updated" });
    }
    res.status(200).send({ msg: "contact updated succ ..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not update contact with this id !!!", error });
  }
}


module.exports = Controllers = {
//   addPerson,
  getPerson,
  deletePerson,
  getOneByIdPerson,
  updatePerson,
  getOnePerson
};
