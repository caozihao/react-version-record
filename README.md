### 该项目用于使用并测试react最新的功能
<!-- 
## 版本号
*  日期
*  内容 -->

## 16.5
*  2018.9.10
*  内容 
    *   增加了对新DevTools探查器插件的支持,面板添加Profiler


## 16.4
*  2018.5.23
*  主要内容   
    * 修复getDerivedStateFromProps Bug
      将该生命周期的触发修改为无论是Mounting还是Updating，也无论是因为什么引起的Updating，全部都会被调用，而在16.3版本中时，只有props才会触发
    * 支持以下指针事件  
    onPointerDown   
    onPointerMove   
    onPointerUp   
    onPointerCancel   
    onGotPointerCapture   
    onLostPointerCapture    
    onPointerEnter    
    onPointerLeave    
    onPointerOver   
    onPointerOut    

##  16.3
* 2018.3.27
* 主要内容
  * 添加上下文context
  * 未来17.x版本将移除以下三个生命周期  
  componentWillMount  
  componentWillReceiveProps   
  componentWillUpdate

  * 作为代替，添加以下三个生命周期  
  UNSAFE_componentWillMount 
  UNSAFE_componentWillReceiveProps  
  UNSAFE_componentWillUpdate

  * 建议将componentWillMount中获取数据改为componentDidMount

  * 新增以下两个生命周期  
  getDerivedStateFromProps  
  getSnapshotBeforeUpdate 


  
  * getDerivedStateFromProps  
  **使用**   
  getSnapshotBeforeUpdate(prevProps, prevState){}   
  **作用**  
  手动保留滚动位置等场景
  
  * getSnapshotBeforeUpdate   
  **使用**  
  static getDerivedStateFromProps(nextProps, prevState) {}  
  **作用**  
  代替 componentWillReceiveProps