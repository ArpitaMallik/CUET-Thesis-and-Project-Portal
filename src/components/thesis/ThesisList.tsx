import { FileText, Download, Award, X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

type Publication = {
  type: string;
  name: string;
  doi: string;
  url: string;
  citations: number;
};

const mockTheses = [
  {
    id: 1,
    title: "Implementation of Deep Learning in Medical Image Analysis",
    authors: ["Nidita Roy", " Zannatul Fardaush Tripty", "Tanjum Motin Mitul"],
    supervisor: "Mir. Md. Saki Kowsar",
    year: 2023,
    topic: "Deep Learning",
    keywords: ["Medical Imaging", "CNN", "Image Segmentation"],
    tags: ["Deep Learning", "Medical Imaging", "AI"],
    feedback: {
      helpful: 15,
      notHelpful: 2,
    },
    publication: {
      type: "journal",
      name: "IEEE Transactions on Medical Imaging",
      doi: "10.1109/TMI.2023.1234567",
      url: "https://doi.org/10.1109/TMI.2023.1234567",
      citations: 5,
    },
  },
  {
    id: 2,
    title: "Optimizing Renewable Energy Storage Using Machine Learning",
    authors: ["Aritra Dutta", "Protick Mahmud", "Sadia Afrin Rupa"],
    supervisor: "Dr. Kaushik Deb",
    year: 2022,
    topic: "Renewable Energy",
    keywords: ["Energy Storage", "Optimization", "Machine Learning"],
    tags: ["Renewable Energy", "Optimization", "AI"],
    feedback: {
        helpful: 20,
        notHelpful: 4,
    },
},
{
    id: 3,
    title: "A Blockchain-Based Framework for Secure IoT Communication",
    authors: ["Nazmul Hossain", "Sifat Ahmed", "Farjana Tamanna"],
    supervisor: "Dr. Mohammed Moshiul Hoque",
    year: 2023,
    topic: "Blockchain",
    keywords: ["Blockchain", "IoT", "Security"],
    tags: ["Blockchain", "IoT", "Cybersecurity"],
    feedback: {
        helpful: 12,
        notHelpful: 3,
    },
},
{
    id: 4,
    title: "Detection of Crop Diseases Using Computer Vision Techniques",
    authors: ["Hasibul Hasan", "Fahmida Tabassum", "Shuvro Kundu"],
    supervisor: "Dr. Asaduzzaman",
    year: 2021,
    topic: "Computer Vision",
    keywords: ["Crop Diseases", "Image Processing", "Detection"],
    tags: ["Computer Vision", "Agriculture", "AI"],
    feedback: {
        helpful: 18,
        notHelpful: 5,
    },
    publication: {
        type: "conference",
        name: "IEEE Symposium on Smart Agriculture",
        doi: "10.1109/SSA.2021.9876543",
        url: "https://doi.org/10.1109/SSA.2021.9876543",
        citations: 6,
    },
},
{
    id: 5,
    title: "Real-Time Traffic Prediction Using Graph Neural Networks",
    authors: ["Mizanur Rahman", "Tariqul Islam", "Samiha Sultana"],
    supervisor: "Dr. Md. Mokammel Haque",
    year: 2023,
    topic: "Graph Neural Networks",
    keywords: ["Traffic Prediction", "GNN", "Real-Time Analysis"],
    tags: ["Graph Neural Networks", "Transportation", "AI"],
    feedback: {
        helpful: 25,
        notHelpful: 3,
    },
},
{
    id: 6,
    title: "Design and Analysis of an Efficient Sorting Algorithm for Big Data",
    authors: ["Rafsan Kabir", "Mehedi Hasan", "Nabila Akter"],
    supervisor: "Annesha Das",
    year: 2022,
    topic: "Big Data",
    keywords: ["Sorting Algorithm", "Big Data", "Efficiency"],
    tags: ["Big Data", "Algorithms", "Efficiency"],
    feedback: {
        helpful: 10,
        notHelpful: 1,
    },

},
  
];

export function ThesisList() {
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null); // Add type here

  return (
    <div className="space-y-4">
      {mockTheses.map((thesis) => (
        <div key={thesis.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{thesis.title}</h3>
              <p className="mt-1 text-sm text-gray-600">
                By {thesis.authors.join(", ")}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Supervisor: {thesis.supervisor}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Year: {thesis.year} | Topic: {thesis.topic}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Keywords: {thesis.keywords.join(", ")}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {thesis.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full hover:bg-emerald-200">
                    <ThumbsUp className="h-4 w-4" />
                    {thesis.feedback.helpful}
                  </button>
                  <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full hover:bg-red-200">
                    <ThumbsDown className="h-4 w-4" />
                    {thesis.feedback.notHelpful}
                  </button>
                </div>
                {thesis.publication && (
                  <button
                    onClick={() => setSelectedPublication(thesis.publication)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200"
                  >
                    <Award className="h-4 w-4" />
                    Published in Journal/Conference
                  </button>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-secondary flex items-center gap-1">
                <FileText className="h-4 w-4" />
                View
              </button>
              <button className="btn btn-primary flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Publication Modal */}
      {selectedPublication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Publication Details</h3>
              <button
                onClick={() => setSelectedPublication(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Published in:</span>{" "}
                {selectedPublication.name}
              </p>
              <p>
                <span className="font-medium">DOI:</span> {selectedPublication.doi}
              </p>
              <p>
                <span className="font-medium">Citations:</span>{" "}
                {selectedPublication.citations}
              </p>
              <a
                href={selectedPublication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 block"
              >
                View Publication
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
