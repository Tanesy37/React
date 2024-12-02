const Propsy = ({ names, handelDelete }) => {
  return (
    <div>
      {names.map((item, index) => {
        return (
          <div key={item.id}>
            
            <span
              style={{
                color: "red",
                fontWeight: "bold",
              }}
            >
              {"Person : " + (index + 1)}
            </span>
            <p>{"name : " + item.name}</p>
            <p>{"age : " + item.age}</p>
            <p> {"country : " + item.country}</p>

            <button
              onClick={() => {
                handelDelete(item.id);
              }}
            >
              delet
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Propsy;
