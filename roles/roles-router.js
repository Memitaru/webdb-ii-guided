const knex = require('knex');
const router = require('express').Router();

const knexConfig = {
  client: 'sqlite3',
  connection: { // string or object
    filename: './data/rolex.db3' // from the root folder
  },
  useNullAsDefault: true,
  debug: false
}

const db = knex(knexConfig);

router.get('/', (req, res) => {
  db('roles')
  .then(roles => {
    res.status(200).json(roles);
  })
  .catch(err => {
    console.log(err)
  })
  // get the roles from the database
  // res.send('Write code to retrieve all roles');
});

// select * from roles where id = :id
router.get('/:id', (req, res) => {
  // retrieve a role by id
  // res.send('Write code to retrieve a role by id');
  db('roles').where({ id: req.params.id })
  .first()
  .then(role => {
    if(role){
      res.status(200).json(role);
    } else{
      res.status(404).json({message: 'Role not found'})
    }
  })
  .catch(err => {
    res.status(500).json(err);
  })
});

// insert into roles() values (req.body)
router.post('/', (req, res) => {
  // add a role to the database
  // res.send('Write code to add a role');
  db('roles').insert(req.body, 'id')
  .then(results => {
    db('roles')
      .where({id: results[0]})
      .first()
      .then(role => {
        res.status(200).json(role);
      })
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update roles
  // res.send('Write code to modify a role');
  db('roles').where({id: req.params.id}).update(req.body)
    .then(count => {
      if(count > 0) {
        res.status(200).json({message: `records updated: ${count}`})
      } else {
        res.status(404).json({message: 'No role at that ID'})
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  // remove roles (inactivate the role)
  // res.send('Write code to remove a role');
  db('roles').where({id: req.params.id}).del()
    .then(count => {
      if(count > 0) {
        res.status(200).json({message: `records deleted: ${count}`})
      } else {
        res.status(404).json({message: 'No role at that ID'})
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;
