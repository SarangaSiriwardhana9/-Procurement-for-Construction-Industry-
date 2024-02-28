# Procurement Management System for the Construction Industry

I'm responsible for a specific section of the Case Study as part of the SLIIT SE Specialization, during the 3rd Year of the 1st Semester. Our focus in this case study is on addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we've developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB. This mobile app is designed to streamline and enhance the procurement procedures in construction.

The Procurement Management System is a comprehensive web-based application designed to optimize and simplify procurement processes within the construction industry. This system is tailored to empower site managers, procurement staff, and external suppliers, facilitating efficient order management, streamlined approval workflows, and seamless communication.

## Features

The system offers a range of powerful features, including:

- **User Management:**
  - Create, manage, and assign user accounts for Procurement Staff, Site Managers, and Suppliers.

- **Order Management:**
  - Create, edit, and approve orders seamlessly within the system.
  - Tailored approval workflows based on the order's total value.

- **Supplier Management:**
  - Add, view, and maintain detailed supplier information.

- **Goods Receipts and Invoices:**
  - Easily generate goods receipts after goods delivery.
  - Streamline the creation of invoices for completed orders.

## User Roles

The system defines specific roles and responsibilities for users:

### Procurement Staff

- Add construction sites and assign site managers to each site.
- Manage suppliers, site managers, and fellow procurement staff.
- Approve orders, particularly those exceeding Rs. 100,000.
- Efficiently oversee goods receipts and invoice generation.

### Site Manager

- Create draft orders to add supplier companies.
- Edit draft orders to convert them into pending orders, selecting products from chosen supplier companies.
- Directly approve orders below Rs. 100,000.
- No access to edit orders after they are placed with the supplier.

### Supplier

- Accept orders placed through the procurement system.
- Manage and maintain product details within the system.

## Order Life Cycle

The order life cycle is a core component of this system, ensuring orders are processed effectively:

- Orders originate as drafts, created by site managers, initially containing only the selected supplier company.
- Orders transition to a pending status when products are added by the site manager.
- Site managers can directly approve orders if the total price is below Rs. 100,000; otherwise, they are sent to procurement staff for approval.
- Once approved by either the site manager or staff, the order is forwarded to the supplier.
- Suppliers have the option to accept or reject orders.
- If accepted, suppliers fulfill the order through single or multiple deliveries.
- After order completion, procurement staff manage invoices and goods receipts.


##Project Structure
The project is organized into two primary directories:

-Backend: Home to the Node.js server, Express.js, and MongoDB configurations.
-Frontend: Housing the React Native mobile app code.

##Technologies Used

-React Native: Empowering the mobile app's front-end development.
-Node.js and Express.js: Orchestrating the server-side logic and API endpoints.
-MongoDB: Serving as the database for storing and managing procurement data.
-Socket.IO: Facilitating real-time communication and notifications.
-Navigation Container: Streamlining navigation between app screens.
Contributing

## Contributors

- Saranga (https://github.com/SarangaSiriwardhana9) 
- Imesh(https://github.com/ImeshR) 

<table>
  <tr>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/5311b73e-202a-4bcf-9625-74b5f02dedba" width="200" height="410"></td>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/911797d3-273d-445e-8b28-cbad07c7af7e"width="200" height="410"></td>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/37887476-a7f7-434d-8e47-8cac7437ece5" width="200" height="410"></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/7aabe37a-46a9-4496-b79f-0328931281cc" width="200" height="410"></td>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/0473755d-4a90-43af-93a3-98468a553d2e" width="200" height="410"></td>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/6826229c-ea62-49b2-9b3e-e2aad842626b" width="200" height="410"></td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/4a862010-4298-4ee0-8f9c-262201c681fa" width="200" height="410"></td>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/9c2b19bc-9d9f-4f82-8a19-eed5d9f38727" width="200" height="410"></td>
    <td align="center"><img src="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-/assets/99233703/5da3564f-e14f-4592-81b1-a5ddb96464f9" width="200" height="410"></td>
  </tr>
</table>







This system simplifies and enhances procurement processes within the construction industry, promoting efficient order management, approval workflows, and collaborative communication among site managers, procurement staff, and suppliers.
