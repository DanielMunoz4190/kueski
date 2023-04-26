CREATE TABLE Client (
 client_id SMALLINT PRIMARY KEY NOT NULL,
 password CHAR(255),
 client_name CHAR(255) NOT NULL,
 first_last_name CHAR(255),
 second_last_name CHAR(255),
 born_date DATE NOT NULL,
 nationality CHAR(255),
 state_of_birth CHAR(255),
 economic_activity CHAR(255),
 curp CHAR(255) NOT NULL,
 gender CHAR(255),
 phone_number INT,
 email CHAR(255),
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
 password CHAR(255),
 user_name CHAR(255) NOT NULL,
 job_area VARCHAR(255),
 number_emergency_contact INT,
 relation_emergency_contact INT NOT NULL,
 email CHAR(255),
 phone_number INT,
 location CHAR(255)
);

-- Crear tabla Identification
CREATE TABLE Identification (
 identification_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
 client_id SMALLINT,
 identification_type SMALLINT,
 identification_number CHAR(255),
 FOREIGN KEY (client_id) REFERENCES Client(client_id)
);

-- Crear tabla Addresses
CREATE TABLE Addresses (
 address_id SMALLINT PRIMARY KEY NOT NULL,
 client_id SMALLINT NOT NULL,
 country CHAR(255),
 state CHAR(255),
 city CHAR(255),
 neighborhood CHAR(255),
 zip_code CHAR(255) NOT NULL,
 street CHAR(255),
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
