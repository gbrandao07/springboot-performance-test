package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ReactiveApiLoadTest extends Simulation {

  val httpConf = http
    .baseUrl("http://localhost:56612")

  val scn = scenario("ReactiveApiLoadTestScenario")
    .exec(http("GetRequest")
    .get("/weather-reactive?cityCode=011"))

  setUp(
    scn.inject(
      atOnceUsers(500)
    ).protocols(httpConf)
  )
}