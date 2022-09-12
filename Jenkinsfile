pipeline{
  agent any
  stages {
    stage("test") {
      steps {
        echo 'test....'
      }
    } 
    stage("build") {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }  
  }  
}
