import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTest extends Simulation {

  val httpConf = http
    .baseUrl("http://localhost:8087")

  val scn = scenario("MyScenario")
    .exec(http("GetRequest")
    .get("/api/weather?cityCode=011"))

  setUp(
    scn.inject(
      rampUsersPerSec(1) to 1000 during (30 seconds),
      constantUsersPerSec(500) during (1 minute) 
    ).protocols(httpConf)
  )
}

