module.exports = function loadResolver() {
  const app = this;

  const Patients = app.service('patients');
  const Users = app.service('users');

  const messages = app.service('messages');
  const pubsub = app.get('pubsub');

  return {
    Query: {
      allPatients(root, args, context) {
        return Patients.find({});
       },
      // patients(root, { username }, context) {
      //   return Users.find({
      //     query: {
      //       username
      //     }
      //   });
      // },
      patient(root, { id }, context) {
        return User.get(id);
      },  
    },
    PageInfo: {
      hasNextPage: (root, args, context, info) => { 
        return root.hasNextPage || false;
      },
      hasPreviousPage: (root, args, context, info) => { 
        return root.hasPreviousPage || false;
      },
      startCursor: (root, args, context, info) => { 
        return root.startCursor;
      },
      endCursor: (root, args, context, info) => { 
        return root.endCursor;
      },      
    },
    Patient: {
      id: (root, args, contect, info) => {
        console.log("patient root:  ", root)
        return root.id;
      },    
    },
     // messages() { return messages.find().then(res => res.data); }
    PatientsConnection: {
      pageInfo: (root, args, context, info) => {
        //console.log(root)
        return root;         
      },
      edges: (root, args, context, info) => {
        //console.log(root)
        return root.data.map((patients) => { return patients; });         
      },
    },
    PatientsEdge: {
      node: (root, args, context, info) => {
        return root;
     },
    },
  
    Mutation: {
      createUser(obj, args, context, info) {
        return Users.create(args, context);
       },
      createPatient(obj, args, context, info) {
        return Patients.create(args, context);
       },
      createMessage(obj, args, context, info) {
        return messages.create({text: args.text}).then(message => {
          pubsub.publish('messageCreated' , message)
          return message;
        });
      }
    },
    Subscription: {
     // messageCreated(message) { return message; }
    }
  };

};

//  Query: {
//       allUsers(root, args, context) {
//         return Users.find({});
//       },
//       users(root, { username }, context) {
//         return Users.find({
//           query: {
//             username
//           }
//         });
//       },
//       user(root, { id }, context) {
//         return User.get(id);
//       }
//     },
//     Mutation: {
//       createUser(obj, args, context, info) {
//         return Users.create(args, context);
//       }

