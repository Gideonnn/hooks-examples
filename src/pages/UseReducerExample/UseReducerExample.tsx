import { useReducer } from 'react';

import { initialState, reducer } from './state';

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstname, lastname, email } = state;

  const setFirstname = (value: string) => dispatch({ type: 'firstname', value: value });
  const setLastname = (value: string) => dispatch({ type: 'lastname', value: value });
  const setEmail = (value: string) => dispatch({ type: 'email', value: value });

  return (
    <div className="pt-12 mx-auto prose text-center">
      <h1>useReducer</h1>

      <div className="flex justify-center gap-4">
        <label htmlFor="firstname">First name</label>
        <input
          id="firstname"
          type="text"
          value={firstname}
          style={{ border: '1px solid #ccc' }}
          onChange={event => setFirstname(event.target.value)}
        />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          type="text"
          value={lastname}
          style={{ border: '1px solid #ccc' }}
          onChange={event => setLastname(event.target.value)}
        />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <label htmlFor="email">Email name</label>
        <input
          id="email"
          type="email"
          value={email}
          style={{ border: '1px solid #ccc' }}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
    </div>
  );
};
