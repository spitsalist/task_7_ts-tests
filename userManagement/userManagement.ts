export namespace UserManagement {
    export namespace Admin {
      export  class AdminUser{
           private name:string
           private email:string
           private isSuperAdmin:boolean

            constructor(name:string, email:string, isSuperAdmin: boolean = false){
            this.name = name
            this.email = email
            this.isSuperAdmin = isSuperAdmin
        }
    public getName(): string{
        return this.name
    } 
    public getEmail(): string{
        return this.email
    } 
    public getIsSuperAdmin(): boolean{
        return this.isSuperAdmin
    } 
    public setName(name: string): void{
         this.name = name
    } 
    public setEmail(email: string): void{
         this.email = email
    } 
    public grantSuperAdminRight(): void{
         this.isSuperAdmin = true
    } 
    public rewokeSuperAdminRight(): void {
        this.isSuperAdmin = false
    }

    public displayInfo(): void {
        console.log(`Admin: ${this.name}`)
        console.log(`Email: ${this.email}`)
        console.log(`Super Admin: ${this.isSuperAdmin ? 'Yes' : 'NO'}`)
    }
}
    }
}