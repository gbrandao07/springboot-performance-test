package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class MyLoadTest extends Simulation {

  val httpConf = http
    .baseUrl("http://localhost:8070")

  val scn = scenario("MyScenario")
    .exec(http("GetRequest")
    .get("/api/weather?cityCode=011"))

  setUp(
    scn.inject(
      rampUsersPerSec(1) to 100 during (30 seconds),
      constantUsersPerSec(50) during (1 minute) 
    ).protocols(httpConf)
  )
}

