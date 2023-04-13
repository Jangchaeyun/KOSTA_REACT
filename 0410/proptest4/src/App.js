import './App.css';

function App() {
  let department = [{id:10, name:'홍보부'}, {id:11, name:'개발부'}, {id:12, name:'영업부'}];
  let employee = [{id:100,name:'홍길동',dept:10},{id:101,name:'김길동',dept:20},{id:102,name:'고길동',dept:20}];
  return (
    <div>
      <Department depts={department}/>
      <Employee emps={employee}/>
    </div>

  );
}

export default App;
