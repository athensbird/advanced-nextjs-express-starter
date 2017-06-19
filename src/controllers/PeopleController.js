import People from '../models/PeopleModel';

const PeopleController = {
  list: (req, res, next) => {
    People.find({}).exec()
      .then(people => {
        // console.log(People);
        return res.json(people);
      })
      .catch(err => next(err));
  },

  find: (req, res, next) => {
    People.findById(req.params.id).exec()
      .then(person => res.json(person))
      .catch(err => next(err));
  },

  create: (req, res, next) => {
    // console.log('back-end req', req.body);
    const person = new People(req.body);
    person.save()
      .then(savedPerson => res.json(savedPerson))
      .catch(err => next(err));
  },

  update: (req, res, next) => {
    People.findById(req.params.id).exec()
      .then(person => {
        person.Name = req.body.name || person.Name;
        person.Alter = req.body.Alter || person.Alter;
        person.Gipfel = req.body.Gipfel || person.Gipfel;
        person.Heimat = req.body.Heimat || person.Heimat;
        person.save();
      })
      .then(person => res.json(person))
      .catch(err => next(err));
  },

  delete: (req, res, next) => {
    People.findByIdAndRemove(req.params.id).exec()
      .then(() => res.json('Person deleted!'))
      .catch(err => next(err));
  }
};

export default PeopleController;
