# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/customers
- We will only work on the "customers" page.

## Tasks
- Open [customer.ts](src/app/model/customer.ts)
- Create a new service: service/customer
- Create a variable in the CustomerService: 
  - name: list
  - value: copy at least ten (10) customers from the [db.json](./server/db.json) file
- Open the [customers.component.ts](src/app/page/customers/customers.component.ts) file
- Inject the CustomerService into the component class
- Create a pointer variable to the list variable from the CustomerService:
  - name: list
  - value: reference of the list variable from the CustomerService
- Open the [customers.component.html](src/app/page/customers/customers.component.html) file
- Create a bootstrap table with the table class
- Create a header and the elements for each property of customers
- Create a body for the table
- Create a loop and walk through each customer from the list
- Show all properties of each customer in a td element

## Testing
- `npm test`
- Or can you test two files individually: `npm run test:01`, `npm run test:02`

## Further helps

### Creating a service
- The service creation command is the following:
```cmd
ng g service service/user
```
- It creates a new service on this path: "src/app/service/user.service.ts"

### Injecting services
- Inject a service into a component class:
```typescript
userService = inject(UserService);
```

### Creating rows from array items in the template
```html
@for (user of list; track $index) {
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.status }}</td>
  </tr>
}
```
