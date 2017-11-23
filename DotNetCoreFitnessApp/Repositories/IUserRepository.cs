namespace DotNetCoreFitnessApp.Repositories
{
    public interface IUserRepository
    {
        void CreateUser(string username, string password);
    }
}