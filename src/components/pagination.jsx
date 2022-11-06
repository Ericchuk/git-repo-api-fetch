import { NavLink } from 'react-router-dom';

export default function Pagination({pageNumbers, loading, paginate, next, prev, disabled, disabled2}){
    return (
      <ul>
        <button onClick={prev} disabled={disabled}>Prev</button>
        {loading ? pageNumbers.map((number) => {
          return (
            <li
              key={number}
              onClick={() => {
                paginate(number);
              }}
            >
              {/* <NavLink t> */}
                {number}
              {/* </NavLink> */}
              
            </li>
          );
        }) : <p>loading...</p>}
        <button onClick={next} disabled={disabled2}>Next</button>
      </ul>
    );
}