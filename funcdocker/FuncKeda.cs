using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;

namespace funcdocker
{
    public static class FuncKeda
    {
        [FunctionName("FuncKeda")]
        public static void Run([QueueTrigger("myqueue-items", Connection = "BlobQueueConnection")]string myQueueItem, ILogger log)
        {
            log.LogInformation($"C# Queue trigger function processed: {myQueueItem}");
        }
    }
}
