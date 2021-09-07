//  addPerson
const addPerson = async (req, res) => {
  try {
    const newPerson = req.body;
    console.log(newPerson);
    const personToFind =await Person.findOne({ name: newPerson.name });

    if (!newPerson.name) {
      return res.status(400).send({ msg: "name is required" });
    }

    if (personToFind) {
      return res.status(400).send({ msg: "alredy exist !!!" });
    }

    const personToAdd = new Person(newPerson)
    console.log('person to add : ')
    await personToAdd.save();

    res.status(200).send({ msg: "person add succ ...", personToAdd });

  } catch (error) {
    res.status(400).send({ msg: "can not add person ", error });
  }
};

//get person

const getPerson = async (req, res) => {
  try {
    const allPerson = await Person.find();
    res.status(200).send({ msg: "all persons ...", allPerson });
  } catch (error) {
    res.status(400).send({ msg: "can not add person ", error });
  }
};

const deletePerson = async (req, res) => {
  console.log(req.params.id);
  try {
    const  {_id} = req.params;
    const personToFind = await Person.findOne({ _id });
    console.log(personToFind);
    if (!personToFind) {
      return res.status(400).send({ msg: "person not exist !!!" });
    }

    await Person.deleteOne({ _id });
    res.status(200).send({ msg: "person deleted succ ..", personToFind });
  } catch (error) {
    res.status(400).send({ msg: "can not delete person with this id ", error });
  }
};

const getOneByIdPerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const persontofind = await Person.findOne({ _id });
    res.status(200).send({ msg: "i find it ...", persontofind });
  } catch (error) {
    res.status(400).send({ msg: "can not find person with this id ", error });
  }
};

const getOnePerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const persontofind = await Person.findOne({ _id });
    console.log("personne ", persontofind);
    res.status(200).send({ msg: "i find it ...", persontofind });
  } catch (error) {
    res.status(400).send({ msg: "can not find person with this id ", error });
  }
};

const updatePerson = async (req, res) => {
  try {
    const { _id } = req.params;
    const newPerson = req.body;
    // const persontofind = await Person.findOne({ _id });
    //   console.log('personne ',persontofind)
    const result = await Person.updateOne({ _id }, { $set: { ...newPerson } });
    console.log(result);
    if (result.nModified === 0) {
      return res.status(400).send({ msg: "alredy updated" });
    }
    res.status(200).send({ msg: "contact updated succ ..." });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not update contact with this id !!!", error });
  }
};

module.exports = Controllers = {
  addPerson,
  getPerson,
  deletePerson,
  getOneByIdPerson,
  updatePerson,
  getOnePerson,
};
