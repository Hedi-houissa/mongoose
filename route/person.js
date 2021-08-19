const express = require("express");

const router = express.Router();

//require model
const Person = require("../model/Person");

const controlles = require("../controllers/controllers");

router.get("/test", (req, res) => {
  res.send("hello word ");
});

/**
 * @description : add person
 * @method : post
 * @path : 'http://localhost:7000/persons/'
 * @data : req.body
 */

router.post("/",  async (req, res) => {
    try {
      const newPerson = req.body;
      const personToFind = Person.findOne({ name: newPerson.name });
      if (!newPerson.name || !newPerson.age) {
        return res.status(400).send({ msg: "name and age required" });
      }
      if (personToFind) {
        return res.status(400).send({ msg: "alredy exist !!!", personToFind });
      }
      const personToAdd = new Person(newPerson);
      await personToAdd.save();
      res.status(200).send({ msg: "person add succ ...", personToAdd });
    } catch (error) {
      res.status(400).send({ msg: "can not add person ", error });
    }
  });

/**
 * @description : get all
 * @method : get
 * @path : 'http://localhost:7000/persons/'
 */

router.get("/", controlles.getPerson);

/**
 * @description : delete person
 * @method : delete
 * @path : 'http://localhost:7000/persons/'
 * @data : req.body
 */

router.delete("/:id",controlles.deletePerson);

/**
 * @description : get one by id person
 * @method : get
 * @path : 'http://localhost:7000/persons/'
 * @data : req.body
 */

router.get("/:_id", controlles.getOneByIdPerson);

/**
 * @description : get one by name food person
 * @method : get
 * @path : 'http://localhost:7000/persons/food/'
 * @data : req.body
 */

router.get("/food/:name", controlles.getOnePerson);

/**
 * @description : update one person
 * @method : put
 * @path : 'http://localhost:7000/persons/'
 * @data : req.body
 */

router.put("/:_id",controlles.updatePerson);

module.exports = router;
