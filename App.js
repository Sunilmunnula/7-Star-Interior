import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to 7 Star Interior</h1>
          <p className="text-lg text-gray-600">Your trusted partner in interior design and remodeling projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Request an Estimate</h2>
              <p className="text-gray-600 mb-4">Get a detailed project estimate with just a few clicks.</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request Estimate</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">View Projects</h2>
              <p className="text-gray-600 mb-4">Track ongoing projects and manage your remodeling tasks.</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">View Projects</Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Make a Payment</h2>
              <p className="text-gray-600 mb-4">Secure and easy payment processing for your projects.</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Make Payment</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
