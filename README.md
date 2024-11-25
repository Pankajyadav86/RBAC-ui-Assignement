# RBAC-ui-Assignement
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="dashboard">
    <aside class="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><a href="#" id="users-tab">Users</a></li>
        <li><a href="#" id="roles-tab">Roles</a></li>
        <li><a href="#" id="permissions-tab">Permissions</a></li>
      </ul>
    </aside>

    <main class="main-content">
      <div id="users-section" class="section active">
        <h1>Manage Users</h1>
        <button onclick="addUser()">Add User</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="users-table-body"></tbody>
        </table>
      </div>

      <div id="roles-section" class="section">
        <h1>Manage Roles</h1>
        <button onclick="addRole()">Add Role</button>
        <ul id="roles-list"></ul>
      </div>

      <div id="permissions-section" class="section">
        <h1>Manage Permissions</h1>
        <button onclick="addPermission()">Add Permission</button>
        <ul id="permissions-list"></ul>
      </div>
    </main>
  </div>
  <script src="script.js"></script>
</body>
</html>