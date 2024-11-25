const usersTab = document.getElementById('users-tab');
const rolesTab = document.getElementById('roles-tab');
const permissionsTab = document.getElementById('permissions-tab');

const usersSection = document.getElementById('users-section');
const rolesSection = document.getElementById('roles-section');
const permissionsSection = document.getElementById('permissions-section');

const usersTableBody = document.getElementById('users-table-body');
const rolesList = document.getElementById('roles-list');
const permissionsList = document.getElementById('permissions-list');

// Data
let users = [];
let roles = [];
let permissions = [];

// Tab Switching
usersTab.addEventListener('click', () => switchSection(usersSection));
rolesTab.addEventListener('click', () => switchSection(rolesSection));
permissionsTab.addEventListener('click', () => switchSection(permissionsSection));

function switchSection(section) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  section.classList.add('active');
}

// User Management
function addUser() {
  const name = prompt('Enter user name:');
  const email = prompt('Enter user email:');
  const role = prompt('Enter user role:');
  users.push({ name, email, role });
  renderUsers();
}

function renderUsers() {
  usersTableBody.innerHTML = users
    .map(
      (user, index) =>
        `<tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td><button onclick="removeUser(${index})">Remove</button></td>
        </tr>`
    )
    .join('');
}

function removeUser(index) {
  users.splice(index, 1);
  renderUsers();
}

// Role Management
function addRole() {
  const role = prompt('Enter role name:');
  roles.push(role);
  renderRoles();
}

function renderRoles() {
  rolesList.innerHTML = roles.map(role => `<li>${role}</li>`).join('');
}

// Permission Management
function addPermission() {
  const permission = prompt('Enter permission name:');
  permissions.push(permission);
  renderPermissions();
}

function renderPermissions() {
  permissionsList.innerHTML = permissions.map(permission => `<li>${permission}</li>`).join('');
}
