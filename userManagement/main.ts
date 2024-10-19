import { UserManagement } from "./userManagement"

let admin = new UserManagement.Admin.AdminUser('Bob Thomson', 'bob.email@.com')
console.log('Admin info')
admin.displayInfo()

console.log('\n super user admin right...')
admin.grantSuperAdminRight()
admin.displayInfo()

console.log('\n Revoking super admin right...')
admin.rewokeSuperAdminRight()
admin.displayInfo()

console.log('\n Changing admin name & email...')
admin.setName('Alex Boo')
admin.setEmail('ales@mail.com')
admin.displayInfo()