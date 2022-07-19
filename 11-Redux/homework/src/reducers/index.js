import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0,
};

//**Aqui defino un objeto con los casos que quiero ejecutar , usando bracket notation para poner el nombre de la propiedad es igual al nombre de la constante.
const cases = {
  [INCREMENT]: (state) => {
    return { count: state.count + 1 };
  },
  [DECREMENT]: (state) => {
    return { count: state.count - 1 };
  },
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

//**Invoco a el objeto cases, ejecutando con un operador ternario el caso que corresponda a la acción.Esta forma es mas eficiente que usar un switch.
export default (state = initialState, action) => {
  return cases.hasOwnProperty(action.type) ? cases[action.type](state) : state;
};

//export default (state = initialState, action) => {
//  switch (action.type) {
//    case INCREMENT:
//      return { count: state.count + 1 };
//    // completa para este caso
//    case DECREMENT:
//      return { count: state.count - 1 };
//    // Fill para este otro
//    default:
//      return state;
//  }
//};
