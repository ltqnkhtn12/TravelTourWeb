const planetData = {
    mercury: {
      image: 'img/mercury.png',
      gravity: 3.7
    },
    venus: {
      image: 'img/venus.png',
      gravity: 8.87
    },
    earth: {
      image: 'img/earth.png',
      gravity: 9.81
    },
    mars: {
      image: 'img/mars.png',
      gravity: 3.711
    },
    jupiter: {
      image: 'img/jupiter.png',
      gravity: 24.79
    },
    saturn: {
      image: 'img/saturn.png',
      gravity: 10.44
    },
    uranus: {
      image: 'img/uranus.png',
      gravity: 8.69
    },
    neptune: {
      image: 'img/neptune.png',
      gravity: 11.15
    }
  };
  
  function calculateWeight() {
    // Lấy thông tin từ người dùng
    const weight = parseFloat(document.getElementById('mass').value);
    const planet = document.getElementById('planet').value.toLowerCase();
  
    // Tính trọng lượng trên hành tinh
    const gravity = planetData[planet].gravity;
    const mass = weight / 9.81;
    const weightOnPlanet = mass * gravity;
  
    // Hiển thị kết quả
    const resultElement = document.getElementById('result');
    resultElement.innerText = `The weight on ${planet} is ${weightOnPlanet.toFixed(2)}N`;
    resultElement.style.width = '320px'
    resultElement.style.marginLeft = '500px'
  
  // Hiển thị ảnh của hành tinh được chọn
  const planetImageElement = document.getElementById('planet-image');
    planetImageElement.src = planetData[planet].image;
    planetImageElement.alt = `${planet} image`;
    planetImageElement.style.height = '350px'
    planetImageElement.style.length = '350px'
    planetImageElement.style.marginTop = '100px'
    planetImageElement.style.marginLeft = '-450px'
  }
  
  const calculateBtn = document.querySelector('#calculate')
  calculateBtn.addEventListener('click',calculateWeight)