export default function Pagination({pageNumbers, loading, paginate, next, prev}){
    return (
      <ul>
        <button onClick={prev}>Prev</button>
        {loading ? pageNumbers.map((number) => {
          return (
            <li
              key={number}
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </li>
          );
        }) : <p>loading...</p>}
        <button onClick={next}>Next</button>
      </ul>
    );
}