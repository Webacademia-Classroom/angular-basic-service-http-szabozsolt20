# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/customers
- We will only work on the "customers" page.

## Tasks
- Open [customer.service.ts](src/app/service/customer.service.ts)
- Inject the HttpClient
- Create a variable:
  - name: apiUrl
  - value: 'http://localhost:3000/customers'
- Create a method in the CustomerService: 
  - name: getAll
  - returns: an Observable with the Customer[] type
  - functionality: performing an http get request to the apiUrl
- Open the [customers.component.ts](src/app/page/customers/customers.component.ts) file
- Set the list variable to an empty array
- Apply the OnInit interface
- Create the ngOnInit method
- Call the customerService.getAll method, subscribe to its return, and set the list variable

## Testing
- `npm test`
- Or can you test two files individually: `npm run test:01`, `npm run test:02`

## Further helps

### Service methods with http
- Need to provide Angular HttpClient in the [app.config.ts] file:
```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    provideHttpClient(),
  ],
};
```

- Create a service method with HTTP for getting data from the server:
```typescript
getAll(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl);
}
```
