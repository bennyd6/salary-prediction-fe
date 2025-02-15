import React, { useState } from 'react';
import { TrendingUp, DollarSign, LineChart, BarChart3, PieChart, Globe, Users, Brain, Zap } from 'lucide-react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './styles/animations.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function LandingPage() {
  const [activeTab, setActiveTab] = useState('global');

  // Industry Analysis Data
  const industryData = {
    labels: ['Tech', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Education'],
    datasets: [
      {
        label: 'Average Salary (USD)',
        data: [95000, 85000, 75000, 65000, 45000, 55000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Experience Impact Data
  const experienceData = {
    labels: ['0-2', '2-5', '5-8', '8-12', '12-15', '15+'],
    datasets: [
      {
        label: 'Salary Growth',
        data: [50000, 70000, 90000, 110000, 130000, 150000],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  // Role Distribution Data
  const roleData = {
    labels: ['Software Dev', 'Data Science', 'Management', 'Design', 'Sales', 'Other'],
    datasets: [
      {
        data: [30, 20, 15, 12, 13, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'industry':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Industry Salary Comparison
              </h3>
              <Bar data={industryData} options={chartOptions} />
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Role Distribution
              </h3>
              <Doughnut 
                data={roleData} 
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    legend: {
                      ...chartOptions.plugins.legend,
                      position: 'right' as const,
                    },
                  },
                }} 
              />
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <LineChart className="w-5 h-5" />
                Experience vs. Salary Growth
              </h3>
              <Line data={experienceData} options={chartOptions} />
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Insights</h3>
              <div className="space-y-4 text-white">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Early Career (0-2 years)</h4>
                  <p>Entry-level positions focus on skill development with moderate compensation</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Mid Career (5-8 years)</h4>
                  <p>Significant salary growth as expertise and leadership skills develop</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Senior Level (12+ years)</h4>
                  <p>Premium compensation reflecting strategic impact and industry expertise</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Global Market Overview
              </h3>
              <Bar data={{
                ...industryData,
                labels: ['USA', 'UK', 'Germany', 'Canada', 'Australia', 'India'],
                datasets: [{
                  ...industryData.datasets[0],
                  data: [100000, 85000, 82000, 78000, 75000, 35000],
                }],
              }} options={chartOptions} />
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Regional Insights</h3>
              <div className="space-y-4 text-white">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">North America</h4>
                  <p>Highest average salaries globally, strong tech and finance sectors</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Europe</h4>
                  <p>Balanced compensation with excellent benefits and work-life balance</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="font-semibold mb-2">Asia Pacific</h4>
                  <p>Rapidly growing market with increasing competitive compensation</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen animate-gradient">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section with Floating Elements */}
        <section className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8 opacity-10">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-32 bg-white rounded-full animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          <div className="glass-effect rounded-3xl p-12 relative z-10">
            <h1 className="text-6xl font-bold text-white mb-6">
              Predict Your Salary with AI
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Make informed career decisions with our advanced salary prediction tool powered by machine learning.
            </p>
            {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover-scale">
              Get Started Now
            </button> */}
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: TrendingUp, color: 'blue', stat: '95%', text: 'Prediction Accuracy' },
            { icon: DollarSign, color: 'green', stat: '1M+', text: 'Salary Data Points' },
            { icon: Globe, color: 'purple', stat: '50+', text: 'Countries Covered' },
            { icon: Users, color: 'pink', stat: '100K+', text: 'Active Users' }
          ].map(({ icon: Icon, color, stat, text }) => (
            <div className="glass-effect rounded-xl p-6 text-center hover-scale" key={text}>
              <div className="flex justify-center mb-4">
                <div className={`bg-${color}-100 p-3 rounded-full`}>
                  <Icon className={`w-8 h-8 text-${color}-600`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat}</h3>
              <p className="text-white/80">{text}</p>
            </div>
          ))}
        </section>

        {/* Interactive Insights Section */}
        <section className="glass-effect rounded-xl p-8 mb-20">
          <div className="flex justify-center gap-8 mb-8">
            {[
              { id: 'global', icon: Globe, text: 'Global Trends' },
              { id: 'industry', icon: BarChart3, text: 'Industry Analysis' },
              { id: 'experience', icon: Brain, text: 'Experience Impact' }
            ].map(({ id, icon: Icon, text }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeTab === id
                    ? 'bg-white text-blue-600'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                {text}
              </button>
            ))}
          </div>
          {getTabContent()}
        </section>

        {/* Features Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Our Salary Predictor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Real-time Analysis',
                description: 'Get instant salary predictions based on current market data',
                color: 'blue'
              },
              {
                icon: Globe,
                title: 'Global Insights',
                description: 'Compare salaries across different countries and regions',
                color: 'green'
              },
              {
                icon: Brain,
                title: 'AI-Powered',
                description: 'Advanced machine learning algorithms for accurate predictions',
                color: 'purple'
              }
            ].map(({ icon: Icon, title, description, color }) => (
              <div className="glass-effect rounded-xl p-6 hover-scale" key={title}>
                <div className="flex justify-center mb-4">
                  <div className={`bg-${color}-100 p-3 rounded-full`}>
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/80">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="glass-effect rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Discover Your Worth?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of professionals who trust our salary predictions
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover-scale">
              Start Free Prediction
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}