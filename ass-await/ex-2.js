let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

let profile = (result) =>{
  console.log(result)
}
let profile2 = (error) =>{
  console.log(error)
}

getJohnProfile().then(profile).catch(profile2)