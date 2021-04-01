// import { useState, useEffect } from "react";
// import { Switch, Route, useHistory } from "react-router-dom";
// import PostCreate from "../screens/FoodCreate";
// import PostDetails from "../screens/FoodDetails";
// import PostEdit from "../screens/FoodEdit";
// import Foods from "../screens/Foods";
// import { destroyFood, getAllFoods, postFood, putFood } from "../services/foods";

// export default function MainContainer(props) {
//   const [foods, setFoods] = useState([]);
//   const history = useHistory();
//   const { currentUser } = props;

//   useEffect(() => {
//     const fetchFoods = async () => {
//       const foodData = await getAllFoods();
//       setFoods(foodData);
//     };
//     fetchFoods();
//   }, []);

//   const handleCreate = async (foodData) => {
//     const newFood = await postFood(foodData);
//     setFoods((prevState) => [...prevState, newFood]);
//     history.push("/foods");
//   };

//   const handleUpdate = async (id, foodData) => {
//     const updatedFood = await putFood(id, foodData);
//     setFoods((prevState) =>
//       prevState.map((food) => {
//         return food.id === Number(id) ? updatedFood : food;
//       })
//     );
//     history.push("/foods");
//   };

//   const handleDelete = async (id) => {
//     await destroyFood(id);
//     setFoods((prevState) => prevState.filter((food) => food.id !== id));
//   };

//   return (
//     <Switch>
//       <Route path="/flavors">
//         <Flavors flavors={flavors} />
//       </Route>
//       <Route path="/foods/new">
//         <FoodCreate handleCreate={handleCreate} />
//       </Route>
//       <Route path="/foods/:id/edit">
//         <FoodEdit foods={foods} handleUpdate={handleUpdate} />
//       </Route>
//       <Route path="/foods/:id">
//         <FoodDetails flavors={flavors} />
//       </Route>
//       <Route path="/foods">
//         <Foods
//           foods={foods}
//           handleDelete={handleDelete}
//           currentUser={currentUser}
//         />
//       </Route>
//     </Switch>
//   );
// }
