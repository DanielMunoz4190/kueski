-- Crear tabla Client
CREATE TABLE Client (
  client_id SMALLINT PRIMARY KEY NOT NULL,
  password CHAR,
  client_name CHAR NOT NULL,
  first_last_name CHAR,
  second_last_name CHAR,
  born_date DATE NOT NULL,
  nationality CHAR,
  state_of_birth CHAR,
  economic_activity CHAR,
  curp CHAR NOT NULL,
  gender CHAR,
  phone_number INT,
  email CHAR,
  client_data_other JSON,
  is_client BOOLEAN,
  is_blocked BOOLEAN,
  created_at DATE,
  updated_at DATE,
  deleted_at DATE,
  ARCO JSON
);
CREATE TABLE Account(
    employe_id SMALLINT PRIMARY KEY NOT NULL,
    password CHAR,
    user_name CHAR NOT NULL,
    job_area string,
    number_emergency_contact INT,
    relation_emergency_contact INT NOT NULL,
    email CHAR,
    phone_number INT,
    location CHAR
);
-- Crear tabla Identification
CREATE TABLE Identification (
  identification_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
  client_id SMALLINT,
  identification_type SMALLINT,
  identification_number CHAR,
  FOREIGN KEY (client_id) REFERENCES Client(client_id)
);

-- Crear tabla Addresses
CREATE TABLE Addresses (
  address_id SMALLINT PRIMARY KEY NOT NULL,
  client_id SMALLINT NOT NULL,
  country CHAR,
  state CHAR,
  city CHAR,
  neighborhood CHAR,
  zip_code CHAR NOT NULL,
  street CHAR,
  ext_number INT,
  int_number INT,
  FOREIGN KEY (client_id) REFERENCES Client(client_id)
);

-- Crear tabla Solicitudes
CREATE TABLE Solicitudes (
  solicitud_id INT PRIMARY KEY,
  client_id SMALLINT,
  date DATE,
  type INT,
  comment VARCHAR(255),
  FOREIGN KEY (client_id) REFERENCES Client(client_id)
);