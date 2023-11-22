/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import UseAxios from "../../../Hooks/UseAxios";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { SiCodechef } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";
// eslint-disable-next-line no-unused-vars
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,PieChart, Pie, Sector, ResponsiveContainer, Legend  } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' , 'Fuchsia' , 'Purple'];

const AdminHome = () => {
    const {User}  = useAuth()
    const AxiosSecure = UseAxios()
    const {data : AdminStats} = useQuery({
        queryKey : ['adminStats'],
        queryFn : async  () =>{
        const res = await AxiosSecure.get('admin-stats')
        console.log(res.data)
        return res.data
        }
    })
    // for order stats
    const {data : OrderStats = []} = useQuery({
      queryKey : ['OrderStats'],
      queryFn : async  () =>{
      const res = await AxiosSecure.get('order-analytics')
      // console.log(res.data)
      return res.data
      }
  })
    // console.log(OrderStats)

    // for the custom bar charts

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
    // custom func for the pie chart


    const RADIAN = Math.PI / 180;
// eslint-disable-next-line no-unused-vars
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
        <div>
          
            <h1 className="text-3xl font-bold  my-2 p-3"><span className="ml-2 ">Hello </span>
           {User?.displayName ? User?.displayName : 'Back'}
            </h1>
            {/* stat */}
            <div className="flex  justify-center">
            <div className="stats shadow p-5">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaMoneyCheckDollar className="text-3xl"></FaMoneyCheckDollar>
    </div>
    <div className="stat-value">${AdminStats?.revenue}</div>
    <div className="stat-title">Revenue</div>
    
   
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <TiGroupOutline className="text-3xl"></TiGroupOutline>
    </div>
    <div className="stat-value">{AdminStats?.Users}</div>
    <div className="stat-title">Customers</div>
    

  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <SiCodechef className="text-3xl"></SiCodechef>
    </div>
    <div className="stat-value">{AdminStats?.MenuItems}</div>
    <div className="stat-title">Menu Items</div>
    
  
  </div>


  <div className="stat">
    <div className="stat-figure text-secondary">
      <CiDeliveryTruck className="text-3xl"></CiDeliveryTruck>
    </div>
    <div className="stat-value">{AdminStats?.Orders}</div>
    <div className="stat-title">Total Orders</div>
    
   
  </div>
  
</div>
            </div>
              {/* stat */}
              {/* for the charts */}
              <div className="flex my-5 justify-center">
                {/* custom  bar charts */}
                <div className="flex-1">
                <BarChart
                      width={500}
                      height={300}
                      data={OrderStats}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {OrderStats.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                      </Bar>
                    </BarChart>
                </div>
                <div className="flex-1">

                      <PieChart width={400} height={400}>
                <Pie
                  data={OrderStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="quantity"
                >
                  {OrderStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
               <Legend></Legend>
              </PieChart>

                </div>
              </div>
                {/* for the charts */}
        </div>
    );
};

export default AdminHome;