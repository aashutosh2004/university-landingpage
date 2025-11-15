import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2 } from "lucide-react";
import {
  getUniversitiesList,
  getUniversityDetails,
  getCourseFees,
  getUniversityStats,
} from "@/api/mockApi";

const ApiDemo = () => {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (apiName: string) => {
    setLoading(true);
    setResponse("");

    try {
      let result;
      switch (apiName) {
        case "list":
          result = await getUniversitiesList();
          break;
        case "details1":
          result = await getUniversityDetails(1);
          break;
        case "details2":
          result = await getUniversityDetails(2);
          break;
        case "fees":
          result = await getCourseFees();
          break;
        case "stats":
          result = await getUniversityStats();
          break;
        default:
          result = { error: "Unknown API" };
      }
      setResponse(JSON.stringify(result, null, 2));
    } catch (error) {
      setResponse(JSON.stringify({ error: "API call failed" }, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span className="font-semibold">Back to Home</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Code2 className="h-8 w-8 text-secondary" />
            API Documentation
          </h1>
          <p className="text-muted-foreground">
            Working APIs returning simple and nested JSON responses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Simple JSON API</CardTitle>
              <CardDescription>Get list of universities</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleApiCall("list")}
                disabled={loading}
                className="w-full"
              >
                GET /api/universities
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nested JSON API (University 1)</CardTitle>
              <CardDescription>Detailed university information with nested objects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleApiCall("details1")}
                disabled={loading}
                className="w-full"
              >
                GET /api/university/1
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nested JSON API (University 2)</CardTitle>
              <CardDescription>Detailed university information with nested objects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleApiCall("details2")}
                disabled={loading}
                className="w-full"
              >
                GET /api/university/2
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Fees API</CardTitle>
              <CardDescription>Get course-wise fee structure</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleApiCall("fees")}
                disabled={loading}
                className="w-full"
              >
                GET /api/courses/fees
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistics API</CardTitle>
              <CardDescription>University statistics and placements</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleApiCall("stats")}
                disabled={loading}
                className="w-full"
              >
                GET /api/stats
              </Button>
            </CardContent>
          </Card>
        </div>

        {response && (
          <Card>
            <CardHeader>
              <CardTitle>API Response</CardTitle>
              <CardDescription>JSON output from the API call</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                <code>{response}</code>
              </pre>
            </CardContent>
          </Card>
        )}

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-secondary border-r-transparent"></div>
            <p className="mt-2 text-muted-foreground">Loading API response...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiDemo;
