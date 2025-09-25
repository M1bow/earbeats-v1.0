import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "earbeatsstore",
  })
  .promise();

export async function getUsers() {
  const [res] = await pool.query("select * from users");
  return res;
}

export async function getUser(userId) {
  const [res] = await pool.query("select * from users where  user_id =?", [
    userId,
  ]);
  return res;
}

export async function getProducts() {
  const [res] = await pool.query(
    `select 
    p.product_id ,pc.category,p.product_name , p.price,p.company,p.img,p.battary_charge,p.battary_life,p.frequency_range,p.active_impedance,p.passive_impedance, pv.color , group_concat(pi.img separator'|') as imgs, p.description 
    from products p 
    cross join product_versions pv on p.product_id  = pv.product_id 
    cross join product_imgs pi on pv.product_version_id =   pi.product_version_id   
    cross join product_categories pc on pc.product_category_id = p.category 
    group by pv.product_version_id;`
  );
  return res;
}

export async function getProduct(productId) {
  const [res] = await pool.query(
    `select 
    p.product_id ,pc.category,p.product_name , p.price,p.company,p.img,p.battary_charge,p.battary_life,p.frequency_range,p.active_impedance,p.passive_impedance, pv.color , group_concat(pi.img separator'|') as imgs, p.description 
    from products p 
    cross join product_versions pv on p.product_id  = pv.product_id 
    cross join product_imgs pi on pv.product_version_id =   pi.product_version_id   
    cross join product_categories pc on pc.product_category_id = p.category 
    where p.product_id =?
    group by pv.product_version_id;`,
    [productId]
  );
  return res;
}

// export async function getCategoryProducts(category) {
//   const [res] = await pool.query(
//     `select
//     p.product_id ,p.product_name , p.price,p.company,p.battary_charge,p.battary_life,p.frequency_range,p.active_impedance,p.passive_impedance, pv.color , group_concat(pi.img separator'|') as imgs, p.description
//     from products p
//     cross join product_versions pv on p.product_id  = pv.product_id
//     cross join product_imgs pi on pv.product_version_id =   pi.product_version_id
//     cross join product_categories pc on pc.product_category_id = p.category
//     where  p.category = ?
//     group by pv.product_version_id;`,
//     [category]
//   );

//   return res;
// }

export async function getOrders() {
  const [res] = await pool.query("select * from orders");
  return res;
}

export async function getUserOrders(userId) {
  const [res] = await pool.query("select * from orders where user_id=?", [
    userId,
  ]);
  return res;
}

export async function insertUser(
  first_name,
  last_name,
  gender,
  email,
  password,
  phone
) {
  const [res] = await pool.query(
    ` insert into users 
    (first_name,last_name,gender,email,password,phone,created_at,points) 
    values (?,?,?,?,?,?,NOW(),0);`,
    [first_name, last_name, gender, email, password, phone]
  );
  return getUser(res.insertId);
}

//

//const users = await getUsers();
const products = await getProducts();
console.log(products);
