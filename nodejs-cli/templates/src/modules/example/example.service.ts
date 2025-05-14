class ExampleService {
    private static instance: ExampleService;
  
    private constructor() {
      // private to prevent direct instantiation
    }
  
    public static getInstance(): ExampleService {
      if (!ExampleService.instance) {
        ExampleService.instance = new ExampleService();
      }
      return ExampleService.instance;
    }
  
    public async getAll() {
      // Fetch users from DB
      return [{ name: 'Anil' }];
    }
  
    public async create(data: any) {
      // Save user
      return data;
    }
  }
  
  export default ExampleService.getInstance();