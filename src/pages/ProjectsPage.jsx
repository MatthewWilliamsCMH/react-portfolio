// // import { useState, useEffect } from 'react';
// // Bringing in the required component from 'react-router-dom' for linking between pages
// import { Link } from 'react-router-dom';
// import Project from '../components/card/Project.jsx';
// // import ListItem from '../components/UI/ListItem';

// // import API from '../utils/API';

// export default function ProjectsPage() {
//   // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
// //I'm not pulling from a db, so don't need this.
//   // const [users, setUsers] = useState([]);

//   // const fetchData = async () => {
//   //   const { data } = await API.getUsers();

//   //   setUsers(data);
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   // Iterate over each mock user to display their abridged profile data and a link to their page
//   return (
//     <div>

//         {users.map((user) => (
//           <ListItem key={user.id}>
//             <Profile user={user} />
//             {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
//             <Link
//               to={`/profile/${user.id}`}
//               className="badge bg-primary rounded-pill"
//             >
//               See More
//             </Link>
//           </ListItem>
//         ))}
//       </ul>
//     </div>
//   );
// }
