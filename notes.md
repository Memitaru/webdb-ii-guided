#Notes

##SQL

### Add Item

INSERT INTO Customers (customerName, contactName, address, city, postalCode, country) VALUES ('Awesome Devs', 'Will Con', '1 Awesome Devs Drive', 'Provo', '12345', 'US');

### Update Item

UPDATE Customers SET country = 'USA'; - Would update the country on ALL customers to USA

UPDATE Customers SET country = 'USA' WHERE customerId = 32;

### Delete

DELETE from Customers WHERE CustomerID = 1;


## API

### Notes

Client <> API (adapter) <> DB(Server)

## Steps

- create a database
- add a roles table to the DB
- Intall knex and sqlite3
- Configure to talk to our database
- Implement the list all roles
- List a role by ID
- Add a role
- Remove a role
- Update a role


