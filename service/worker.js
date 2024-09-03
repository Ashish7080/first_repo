import { Worker } from "bullmq";

const worker = new Worker(
  "Paint",
  async (job) => {
    if (job.name === "cars") {
      console.log(job.data.color);
    }else if(job.name==='planes'){
          console.log("job",job.data.quality)
    }
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
