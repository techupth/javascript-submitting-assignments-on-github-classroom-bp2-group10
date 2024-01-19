let getJohnProfile = () => {
    return new Promise(function (resolve) {
      setTimeout(
        () =>
          resolve({
            name: "John",
            age: 20,
            hobbies: ["Coding", "Football"],
          }),
        1000
      );
    });
  };

let profile = (data) =>{
    console.log(data)
}

getJohnProfile().then(profile)