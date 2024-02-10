// App.js
import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";


import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer,Legend } from "recharts";

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid } from "recharts";

import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const data_1 = [
  { x: 10, y: 20 },
  { x: 15, y: 25 },
  // Add more data points as needed
];

const data_2 = [
  { name: "Category A", value: 30 },
  { name: "Category B", value: 70 },
  // { name: 'Category C', value: 20 },
  // { name: 'Category D', value: 10 },
];

// Sample data, replace it with your actual data
const focusTopics = [
  { topic: "Focus Topic 1" },
  { topic: "Focus Topic 2" },
  { topic: "Focus Topic 3" },
  { topic: "Focus Topic 4" },
  { topic: "Focus Topic 5" },
  { topic: "Focus Topic 6" },
  { topic: "Focus Topic 7" },
  { topic: "Focus Topic 8" },
  { topic: "Focus Topic 9" },
  { topic: "Focus Topic 10" },

];

const COLORS = ["#0088FE", "#00C49F"];


const columns = ['TYPE', 'NEWS', 'SCORE','IMPACT' , 'PROBABILITY'];

const rows = [
  ['ERU', 'fgyhvjhvbb cfdcbbjmb gbjhi hjhhufc guhubhcfu dcgbcedu bhbj bhjbjhubcdc', '+1', 'High', 'High' ],
  ['INR', 'fgyhvjhvbb cfdcbbjmb gbjhi hjhhufc guhubhcfu dcgbcedu bhbj bhjbjhubcdc', '+1', 'Neutral','High'],
  ['CAD', 'fgyhvjhvbb cfdcbbjmb gbjhi hjhhufc guhubhcfu dcgbcedu bhbj bhjbjhubcdc', '+1', 'High','High'],
  ['CAD', 'fgyhvjhvbb cfdcbbjmb gbjhi hjhhufc guhubhcfu dcgbcedu bhbj bhjbjhubcdc', '+1', 'Low','High'],
  ['OIL', 'fgyhvjhvbb cfdcbbjmb gbjhi hjhhufc guhubhcfu dcgbcedu bhbj bhjbjhubcdc', '+1', 'High','High'],
  // ['eru', 'fgyhvjhvbb cfdcbbjmb gbjhi hjhhufc guhubhcfu dcgbcedu bhbj bhjbjhubcdc', '+1', 'High','High'],

];




// Function to define styles for individual cells
const getCellStyles = (columnName) => {
  switch (columnName) {
    case 'NEWS':
      return { fontSize: '0.6em' };
    case 'PROBABILITY':
      return { backgroundColor: '#fff', textAlign: 'center', scale: '0.4', fontSize: '2em', color: '#0088fe' };
    case 'SCORE':
      return { color: '#0088fe' };
    default:
      return {};
  }
};

function App() {
  const [ishandleSeeAll, setHandleSeeAll] = useState(false);

  const handleSeeAll = () => {
   
    setHandleSeeAll((prev) => !prev);
  };


  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      {/* dashboard here */}

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <SubHeader />

        {/* section-1 */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            background: "#f0f0f0",
          }}
        >
          {/* chart-1 */}
          <div style={{ flex: 2, marginRight: "20px" }}>
          

            <Paper
              style={{
                flex: 1,
                padding: "1em",
                margin: "1em",
                minHeight: "23em",
                background: "white",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h6" gutterBottom>
                News and Data Flow
              </Typography>
              <div
                style={{
                  height: "100px",
                  minHeight: "19em",
                  backgroundColor: "#eee",
                }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart
                    margin={{ top: 20, right: 30, bottom: 10, left: 10 }}
                  >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="X Axis" />
                    <YAxis type="number" dataKey="y" name="Y Axis" />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Scatter name="Data" data={data_1} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </Paper>
          </div>

          {/* chart-2 */}

          <div style={{ flex: 1 }}>
     
            <Paper
              style={{
                flex: 1,
                padding: "1em",
                margin: "1em",
                minHeight: "23em",
                background: "white",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h6" gutterBottom>
               
                Average Score
              </Typography>
              <div
                style={{
                  height: "100px",
                  minHeight: "19em",
                  backgroundColor: "#eee",
                }}
              >
        
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    
                    <Pie
                      data={data_2}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      innerRadius={60} // Set innerRadius for the doughnut effect
                      fill="#8884d8"
                      label
                    >
                      {data_2.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend align="center" verticalAlign="bottom" />
                    
                  </PieChart>
                  <div style={{scale:'0.7',marginTop:'-8em',marginLeft:'11em'}}>
                      <p  style={{
                      color: '#888'
                    }}>About graph</p>
                      <p style={{color:'#0088fe',cursor:'pointer'}}>See Detail {String.fromCharCode(62)}</p>
                    </div>
                </ResponsiveContainer>
              </div>
            </Paper>
          </div>
        </div>

        {/* section-2 */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            background: "#f0f0f0",
            marginTop: "20px",
          }}
        >
          {/* chart-3 */}
          <div style={{ flex: 2, marginRight: "20px" }}>
          
            <Paper
              style={{
                flex: 1,
                padding: "1em",
                margin: "1em",
                minHeight: "23em",
                background: "white",
                borderRadius: "4px",
                
              }}
            >
              <Typography variant="h6" gutterBottom>
              
                Refined News and Data Flow
              </Typography>
              <div
                style={{
                  height: "100px",
                  backgroundColor: "#eee",
                  minHeight: "21em",
                  overflowY:'auto' 
                }}
              >
                <div
                  style={{ transform: "scale(0.84)", transformOrigin: "top" }}
                >
                  <Table>
                    <TableHead>
                      <TableRow >
                        {columns.map((column, index) => (
                          <TableCell key={index} 
                          
                          >{column}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, rowIndex) => (
                        <TableRow 
                        key={rowIndex}
                         >
                          {row.map((cell, cellIndex) => (
                            <TableCell
                              key={cellIndex}
                              style={getCellStyles(columns[cellIndex])}
                            
                            >
                              {cell}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Paper>
          </div>

          {/* chart */}
          <div style={{ flex: 1 }}>
            
            <Paper
              style={{
                flex: 1,
                padding: "1em",
                margin: "1em",
                minHeight: "23em",
                background: "white",
                borderRadius: "4px",
              }}
            >
              <Typography variant="h6" gutterBottom>
          
                Top 10 Focus Topics
              </Typography>
              <div
                style={{
                  height: "100px",
                  minHeight: "19em",
                  backgroundColor: "#eee",
                }}
              >
                {focusTopics.map((item, index) => (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: "1em",
                        paddingRight: "1em",
                        fontSize: "0.59em",
                        color: "#888",
                      }}
                    >
                      <div key={index}>{`${index + 1}. ${item.topic} `}</div>
                      <div
                        style={{
                          backgroundColor: "#0088FE",
                          borderRadius: "20PX",
                          scale: "0.6",
                          width: "7em",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ color: "#fff" }}>Score 1</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    color: "blue",
                    marginTop: "-1em",
                    fontSize: "0.8em",
                  }}
                  onClick={handleSeeAll}
                >
                  <p
                    style={{
                      color: ishandleSeeAll ? "#888" : "#0088FE", 
                      cursor: "pointer",
                    }}
                  >
                    See all  {String.fromCharCode(62)}
                  </p>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
