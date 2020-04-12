class Vector {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get getLength() {
    let len = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow(this.z,2));
    return len;
  }

  static plus(a, b) {
    const result_x = a.x + b.x;
    const result_y = a.y + b.y;
    const result_z = a.z + b.z;
    return `{${result_x}; ${result_y}; ${result_z}}`;
  }

  static scalar(a, b) {
    return (a.x * b.x + a.y * b.y + a.z * b.z)
  }

  toString() {
    let res = String(`{X: ${this.x}; Y: ${this.y}; Z: ${this.z}}`);
    return res;
    }

  valueOf() {
    return this.getLength;
  }
}

function main()
{

  let x1, y1, z1, x2, y2, z2;
  x1 = Number(document.getElementById("input_x1").value);
  y1 = Number(document.getElementById("input_y1").value);
  z1 = Number(document.getElementById("input_z1").value);
  x2 = Number(document.getElementById("input_x2").value);
  y2 = Number(document.getElementById("input_y2").value),
  z2 = Number(document.getElementById("input_z2").value);

  let firs_vector = new Vector(x1, y1, z1);
  let second_vector = new Vector(x2, y2, z2);

  let scalar_res = Vector.scalar(firs_vector, second_vector);
  let plus_res =  Vector.plus(firs_vector, second_vector);
  let first_val = firs_vector.valueOf();
  let first_str = firs_vector.toString();

  let second_val = second_vector.valueOf();
  let second_str = second_vector.toString();

  //alert(`first vector to string: ${first_str}`)
  //alert(`second vector to string: ${second_str}`)

  document.getElementById("scalar_result").innerText = scalar_res.toString();
  document.getElementById("plus_result").innerText = plus_res.toString();
  document.getElementById("first_value").innerText = first_val.toString();
  document.getElementById("second_value").innerText = second_val.toString();

  document.getElementById("first_to_str").innerText = first_str.toString();
  document.getElementById("second_to_str").innerText = second_str.toString();

}

  