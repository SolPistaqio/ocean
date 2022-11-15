function Welcome(props) {
  return (
    <div className="content">
      <h1>Welcome to the Summer Ocean</h1>

      <button
        id="myBtn"
        onClick={() => {
          props.start();
        }}
      >
        Begin my visual meditation
      </button>
    </div>
  );
}

export default Welcome;
