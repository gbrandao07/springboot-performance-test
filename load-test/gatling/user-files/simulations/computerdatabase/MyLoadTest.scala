package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class MyLoadTest extends Simulation {

  val httpConf = http
    .baseUrl("http://localhost:8090")

  val scn = scenario("MyScenario")
    .exec(http("GetRequest")
    .get("/weather?cityCode=011"))

  setUp(
    scn.inject(
      atOnceUsers(300) // Envia todas as 100 requisições simultaneamente
    ).protocols(httpConf)
  )
}

